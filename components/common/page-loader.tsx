"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";
import React, { useEffect, useRef, useSyncExternalStore } from "react";

const loaderStore = {
  hasVisited: false,
  listeners: new Set<() => void>(),

  getSnapshot() {
    return this.hasVisited;
  },

  getServerSnapshot() {
    return true;
  },

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },

  initialize() {
    if (typeof window === "undefined") return;
    this.hasVisited = sessionStorage.getItem("home-visited") === "true";
  },

  setVisited() {
    this.hasVisited = true;
    sessionStorage.setItem("home-visited", "true");
    this.listeners.forEach((l) => l());
  },
};

if (typeof window !== "undefined") {
  loaderStore.initialize();
}

function useHasVisited() {
  return useSyncExternalStore(
    (cb) => loaderStore.subscribe(cb),
    () => loaderStore.getSnapshot(),
    () => loaderStore.getServerSnapshot()
  );
}

function LoaderOverlay({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.opacity = "0";
      }
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      style={{ opacity: 1, transition: "opacity 0.5s ease-out" }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-background"
    >
      <p className="text-xl md:text-2xl lg:text-3xl font-medium">
        <EncryptedText
          text="Welcome to Trimesha."
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-black"
          revealDelayMs={50}
        />
      </p>
    </div>
  );
}

export function PageLoader({ children }: { children: React.ReactNode }) {
  const hasVisited = useHasVisited();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleLoaderComplete = React.useCallback(() => {
    loaderStore.setVisited();
    if (contentRef.current) {
      contentRef.current.style.opacity = "1";
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("home-visited");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <>
      {!hasVisited && <LoaderOverlay onComplete={handleLoaderComplete} />}

      <div
        ref={contentRef}
        style={{
          opacity: hasVisited ? 1 : 0,
          transition: "opacity 0.5s ease-out",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default PageLoader;
