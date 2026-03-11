type PlaceholderScreenProps = {
  title: string;
  description?: string;
};

export default function PlaceholderScreen({
  title,
  description,
}: PlaceholderScreenProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-8 text-center text-neutral-700">
      <h2 className="text-base font-semibold">{title}</h2>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-neutral-500">{description}</p>
      ) : null}
    </div>
  );
}

