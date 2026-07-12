import React from "react";
import Infinitegrid, { InfiniteDraggableGrid } from "./infiniteGrid";

const ImageGalary = () => {
  const galleryData = [
    {
      id: 0,
      full_src:
        "https://i.pinimg.com/736x/01/f7/6f/01f76fae39bf45769c8c940d6eff001f.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/01/f7/6f/01f76fae39bf45769c8c940d6eff001f.jpg",
      title: "Gallery Image 0",
    },
    {
      id: 1,
      full_src:
        "https://i.pinimg.com/736x/76/ad/48/76ad4830bbc20ea013990d7cc9ffba80.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/76/ad/48/76ad4830bbc20ea013990d7cc9ffba80.jpg",
      title: "Gallery Image 1",
    },
    {
      id: 2,
      full_src:
        "https://i.pinimg.com/736x/90/e4/c2/90e4c254a07f921c31c66fd94df63414.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/90/e4/c2/90e4c254a07f921c31c66fd94df63414.jpg",
      title: "Gallery Image 2",
    },
    {
      id: 3,
      full_src:
        "https://i.pinimg.com/736x/c9/8d/ea/c98dea77698f5cb72b4314958aba43c9.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/c9/8d/ea/c98dea77698f5cb72b4314958aba43c9.jpg",
      title: "Gallery Image 3",
    },
    {
      id: 4,
      full_src:
        "https://i.pinimg.com/736x/48/d5/3e/48d53e554be50bfd12ba8607a145e373.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/48/d5/3e/48d53e554be50bfd12ba8607a145e373.jpg",
      title: "Gallery Image 4",
    },
    {
      id: 5,
      full_src:
        "https://i.pinimg.com/1200x/a4/c0/ac/a4c0ac666836ed49bd0374db80cfca34.jpg",
      thumb_src:
        "https://i.pinimg.com/1200x/a4/c0/ac/a4c0ac666836ed49bd0374db80cfca34.jpg",
      title: "Gallery Image 5",
    },
    {
      id: 6,
      full_src:
        "https://i.pinimg.com/1200x/34/7a/e5/347ae5b58bf4ce879a98a8ceadd62605.jpg",
      thumb_src:
        "https://i.pinimg.com/1200x/34/7a/e5/347ae5b58bf4ce879a98a8ceadd62605.jpg",
      title: "Gallery Image 6",
    },
    {
      id: 7,
      full_src:
        "https://i.pinimg.com/736x/be/82/bf/be82bf1459b09aec309b8de543390592.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/be/82/bf/be82bf1459b09aec309b8de543390592.jpg",
      title: "Gallery Image 7",
    },
    {
      id: 8,
      full_src:
        "https://i.pinimg.com/1200x/cc/29/db/cc29db6b49a76a2ce30feebc0165dc4e.jpg",
      thumb_src:
        "https://i.pinimg.com/1200x/cc/29/db/cc29db6b49a76a2ce30feebc0165dc4e.jpg",
      title: "Gallery Image 8",
    },
    {
      id: 9,
      full_src:
        "https://i.pinimg.com/736x/69/2b/8a/692b8a069e34240a18fb5a5cfc8acf55.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/69/2b/8a/692b8a069e34240a18fb5a5cfc8acf55.jpg",
      title: "Gallery Image 9",
    },
    {
      id: 10,
      full_src:
        "https://i.pinimg.com/736x/96/16/6d/96166dc527781eb7c9f8608056227e5a.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/96/16/6d/96166dc527781eb7c9f8608056227e5a.jpg",
      title: "Gallery Image 10",
    },
    {
      id: 11,
      full_src:
        "https://i.pinimg.com/1200x/3b/46/5d/3b465d84573028ba35745a321c1ca070.jpg",
      thumb_src:
        "https://i.pinimg.com/1200x/3b/46/5d/3b465d84573028ba35745a321c1ca070.jpg",
      title: "Gallery Image 11",
    },
    {
      id: 12,
      full_src:
        "https://i.pinimg.com/1200x/af/51/d2/af51d2b2cb7dc0e64deb4aeeea7864bb.jpg",
      thumb_src:
        "https://i.pinimg.com/1200x/af/51/d2/af51d2b2cb7dc0e64deb4aeeea7864bb.jpg",
      title: "Gallery Image 12",
    },
    {
      id: 13,
      full_src:
        "https://i.pinimg.com/736x/bb/c2/f8/bbc2f865009e4833b50f3323aa22c959.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/bb/c2/f8/bbc2f865009e4833b50f3323aa22c959.jpg",
      title: "Gallery Image 13",
    },
    {
      id: 14,
      full_src:
        "https://i.pinimg.com/736x/17/28/95/172895364121b560a90bfed3dd7088d1.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/17/28/95/172895364121b560a90bfed3dd7088d1.jpg",
      title: "Gallery Image 14",
    },
    {
      id: 15,
      full_src:
        "https://i.pinimg.com/1200x/cb/8e/4a/cb8e4a90a41ac5ec0289a122c8ac62ba.jpg",
      thumb_src:
        "https://i.pinimg.com/1200x/cb/8e/4a/cb8e4a90a41ac5ec0289a122c8ac62ba.jpg",
      title: "Gallery Image 15",
    },
    {
      id: 16,
      full_src:
        "https://i.pinimg.com/736x/a6/ad/2a/a6ad2ac7d581b305a905ce9800f44a51.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/a6/ad/2a/a6ad2ac7d581b305a905ce9800f44a51.jpg",
      title: "Gallery Image 16",
    },
    {
      id: 17,
      full_src:
        "https://i.pinimg.com/736x/9e/ff/d8/9effd8af6058af8562644091ac7f5af9.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/9e/ff/d8/9effd8af6058af8562644091ac7f5af9.jpg",
      title: "Gallery Image 17",
    },
    {
      id: 18,
      full_src:
        "https://i.pinimg.com/1200x/85/41/c9/8541c9b62ee01506efedf6ebfc766433.jpg",
      thumb_src:
        "https://i.pinimg.com/1200x/85/41/c9/8541c9b62ee01506efedf6ebfc766433.jpg",
      title: "Gallery Image 18",
    },
    {
      id: 19,
      full_src:
        "https://i.pinimg.com/736x/db/99/39/db9939d08aaa404cc01884f6eb9a3e44.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/db/99/39/db9939d08aaa404cc01884f6eb9a3e44.jpg",
      title: "Gallery Image 19",
    },
    {
      id: 20,
      full_src:
        "https://i.pinimg.com/736x/90/e4/c2/90e4c254a07f921c31c66fd94df63414.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/90/e4/c2/90e4c254a07f921c31c66fd94df63414.jpg",
      title: "Gallery Image 20",
    },
    {
      id: 21,
      full_src:
        "https://i.pinimg.com/736x/c9/8d/ea/c98dea77698f5cb72b4314958aba43c9.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/c9/8d/ea/c98dea77698f5cb72b4314958aba43c9.jpg",
      title: "Gallery Image 21",
    },
    {
      id: 22,
      full_src:
        "https://i.pinimg.com/736x/48/d5/3e/48d53e554be50bfd12ba8607a145e373.jpg",
      thumb_src:
        "https://i.pinimg.com/736x/48/d5/3e/48d53e554be50bfd12ba8607a145e373.jpg",
      title: "Gallery Image 22",
    },
  ];
  return (
    <div className="w-full h-screen">
      <InfiniteDraggableGrid gallery={galleryData} />
    </div>
  );
};

export default ImageGalary;
