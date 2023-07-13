import IgniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className="bg-gray-800 py-5 flex justify-center items-center gap-4">
      <img src={IgniteLogo} alt="logo" className="h-8" />
      <span className="text-gray-100 text-2xl font-bold">Ignite Feed</span>
    </header>
  );
}
