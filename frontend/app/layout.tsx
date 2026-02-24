import "./globals.css";

export const metadata = {
  title: "Made by Jimmy",
  description: "Hello",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
