import Navbar from "@/app/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </>
  );
}
