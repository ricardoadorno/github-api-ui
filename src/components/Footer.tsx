export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-12 bg-black text-slate-400">
      <p className="text-center ">
        Copywrite &copy;
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
