"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Loader2 } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
                if (pathname !== "/admin/login") {
                    router.push("/admin/login");
                }
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router, pathname]);

    useEffect(() => {
        if (!loading && authenticated && pathname === "/admin/login") {
            router.replace("/admin/dashboard");
        }
    }, [loading, authenticated, pathname, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    // If we are on the login page and not authenticated, just render the login page
    if (!authenticated && pathname === "/admin/login") {
        return <>{children}</>;
    }

    // If authenticated but visiting login page, show nothing while redirecting
    if (authenticated && pathname === "/admin/login") {
        return null; // Or a loading spinner
    }

    return (
        <div className="min-h-screen bg-dark flex flex-col text-white">
            {authenticated && pathname !== "/admin/login" && (
                <nav className="bg-dark-100 border-b border-dark-200 sticky top-0 z-10 px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
                    <h1 className="text-lg sm:text-xl font-semibold text-white w-full sm:w-auto text-center sm:text-left">Admin Dashboard</h1>
                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 sm:gap-4">
                        <span className="text-xs sm:text-sm text-gray-400 max-w-[150px] sm:max-w-xs truncate">{auth.currentUser?.email}</span>
                        <button
                            onClick={() => auth.signOut()}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-red-400 bg-red-900/20 hover:bg-red-900/40 border border-red-900/50 rounded-lg transition-colors flex-shrink-0"
                        >
                            Logout
                        </button>
                    </div>
                </nav>
            )}
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
