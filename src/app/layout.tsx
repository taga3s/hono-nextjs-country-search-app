import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "A Search App",
	description: "Made with Next.js and Hono.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
