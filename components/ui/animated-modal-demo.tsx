"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

export function AnimatedModalDemo() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger asChild>
          <Button
            variant="default"
            className="relative group/modal-btn bg-black dark:bg-white dark:text-black text-white hover:bg-black/90 dark:hover:bg-white/90"
          >
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              Book your call
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white dark:text-black z-20">
              ✈️
            </div>
          </Button>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <ModalInnerContent images={images} />
          </ModalContent>
          <ModalFooter className="gap-4">
            <Button
              variant="secondary"
              className="w-28 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300"
            >
              Cancel
            </Button>
            <Button
              variant="default"
              className="w-28 bg-black text-white dark:bg-white dark:text-black border border-black"
            >
              Book Now
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

function ModalInnerContent({ images }: { images: string[] }) {
  const { open } = useModal();
  const [rotations, setRotations] = React.useState<number[]>([]);

  React.useEffect(() => {
    setRotations(images.map(() => Math.random() * 20 - 10));
  }, [images]);

  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        Book a discovery call
      </h4>
      <div className="flex justify-center items-center">
        {!open ? (
          images.map((image, idx) => (
            <motion.div
              key={"images" + idx}
              style={{
                rotate: rotations[idx],
              }}
              whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              whileTap={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
              }}
              className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt="bali images"
                width={500}
                height={500}
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
              />
            </motion.div>
          ))
        ) : (
          <div className="w-full h-150">
            <InlineWidget url="https://calendly.com/vishwamshah007/discovery-call?month=2025-12" />
          </div>
        )}
      </div>
    </>
  );
}

export default AnimatedModalDemo;
