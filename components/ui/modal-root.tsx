"use client";
import React from "react";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import { InlineWidget } from "react-calendly";

export function ModalRoot() {
  const { setOpen } = useModal();

  return (
    <>
      {/* ModalBody renders when `open` is true via useModal in animated-modal */}
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Book a discovery call
          </h4>
          <div className="w-full h-150">
            {/* Calendly Inline Widget */}
            <InlineWidget
              url="https://calendly.com/vishwamshah007/discovery-call?month=2025-12"
              pageSettings={{
                backgroundColor: "#1a1a1a",
                textColor: "#ffffff",
                primaryColor: "#6366f1"
              }}
            />
          </div>
        </ModalContent>
        <ModalFooter className="gap-4">
          <Button
            variant="secondary"
            onClick={() => setOpen(false)}
            className="w-28 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalBody>
    </>
  );
}

export default ModalRoot;
