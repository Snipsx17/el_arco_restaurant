
export default function ErrorLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-red-500! text-sm font-bold">
      {children}
    </span>
  )
}
