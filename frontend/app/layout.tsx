import "./globals.css";
import Header from "../components/Header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
