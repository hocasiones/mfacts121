import { LicenseInfo } from "@mui/x-license-pro"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { getCookies } from "cookies-next"
import Head from "next/head"
import PropTypes from "prop-types"
import React from "react"
import "react-lazy-load-image-component/src/effects/black-and-white.css"
import "react-lazy-load-image-component/src/effects/blur.css"
import "react-lazy-load-image-component/src/effects/opacity.css"
import "simplebar/dist/simplebar.css"
import ErrorBoundary from "../components/ErrorBoundary"
import Notice from "../components/Notice"
import ProgressBar from "../components/ProgressBar"
import MotionLazyContainer from "../components/animate/MotionLazyContainer"
import ThemeSettings from "../components/settings"
import { CollapseDrawerProvider } from "../contexts/CollapseDrawerContext"
import { SettingsProvider } from "../contexts/SettingsContext"
import ThemeProvider from "../theme"
import { getSettings } from "../utils/getSettings"
LicenseInfo.setLicenseKey(process.env.NEXT_PUBLIC_MUI_KEY)

// ----------------------------------------------------------------------

MyApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
	settings: PropTypes.object,
}

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {
	// const { Component, pageProps, settings } = props;
	const cookieStore = getCookies()

	// const cookies = cookie.parse(context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie);
	const settings = getSettings(cookieStore)

	const getLayout = Component.getLayout ?? ((page) => page)

	// Create a client
	const queryClient = new QueryClient()

	return (
		<React.Fragment>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

			<ErrorBoundary>
				<CollapseDrawerProvider>
					<SettingsProvider defaultSettings={settings}>
						<MotionLazyContainer>
							<ThemeProvider>
								<ThemeSettings>
									<QueryClientProvider client={queryClient}>
										<PayPalScriptProvider
											options={{
												clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
												"client-id": "sb",
												// clientId: "test",
												currency: "AUD",
												intent: "capture",
											}}
										>
											<ProgressBar />
											<Notice />
											{getLayout(<Component {...pageProps} />)}
											<ReactQueryDevtools initialIsOpen={false} />
										</PayPalScriptProvider>
									</QueryClientProvider>
								</ThemeSettings>
							</ThemeProvider>
						</MotionLazyContainer>
					</SettingsProvider>
				</CollapseDrawerProvider>
			</ErrorBoundary>
		</React.Fragment>
	)
}
