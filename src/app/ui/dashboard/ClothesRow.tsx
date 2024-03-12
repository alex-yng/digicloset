export default function ClothesRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col gap-3 my-4 border p-4 border-gray-500'>
      <h1 className='text-white text-3xl'>Row Name</h1>
      <div className='h-64 flex gap-16'>{children}</div>
    </div>
  );
}
