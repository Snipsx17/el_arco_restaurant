import { cn } from "@/lib/utils";
import { FieldErrors } from "react-hook-form";

interface Props {
    children: React.ReactNode,
    errors: FieldErrors,
    className?: string
}

export default function InputGroup({ children, errors, className }: Props) {
    return (
        <div className={cn(className, { 'mb-4': errors.firstName?.type !== 'required' })}>
            {children}
        </div>
    )
}
