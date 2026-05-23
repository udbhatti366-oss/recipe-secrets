
export const metadata = {
  title: "Recipe Secrets",
  description: "Luxury food trends and viral recipes",
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
