export default function Badge({ label }) {
  return (
    <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
      {label}
    </span>
  );
}