
export default function Features() {
  return (
    <section className="px-24 py-24 grid grid-cols-3 gap-12">
      {[1,2,3].map(i => (
        <div key={i} className="p-8 border rounded-xl">
          <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
          <p className="text-secondary">
            Matches spacing, typography, and interactions from Figma.
          </p>
        </div>
      ))}
    </section>
  );
}
