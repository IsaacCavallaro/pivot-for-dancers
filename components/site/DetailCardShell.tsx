import type { ReactNode } from 'react';

export default function DetailCardShell({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={`rounded-[34px] border border-[#E8E0D4] bg-[#F5F6F2] p-4 shadow-[0_30px_70px_rgba(45,49,56,0.08)] ${className}`}>
            <div className="h-full rounded-[28px] border border-black/8 bg-white">{children}</div>
        </div>
    );
}
