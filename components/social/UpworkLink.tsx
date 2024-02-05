import Image from "next/image";

export const UpworkLink = () => {
  return (
    <a
      className="font-medium self-start flex items-center justify-center min-h-11 min-w-11 p-2 rounded-1.5 no-underline transition-colors text-secondary-txt bg-transparent leading-none hocus:text-[#1471a9] hocus:dark:text-[#1da1f2] hocus:bg-[#e8f6fe] dark:hocus:bg-[#093049]"
      title="Upwork"
      aria-label="Upwork"
      data-umami-event="Social link"
      data-umami-event-site="Upwork"
      target="_blank"
      rel="noopener noreferrer"
      href=""
    >
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAApCAQAAAAhMpmoAAADyUlEQVRYw72XXUxWdRjAnxeQJRgICwmR5hebFnjhZgGthtrMTd2ULtxybpXLiz4WG16oW7S5IudVbn2CY9OYzVo1m3bhhShZS0mqgVakiyWGA/wKZALy/ro457zv/znnvB+c197nf/X+z/M8v/ec//P1F8aZshe0k4O4BSHEIbC1wgxQiXj1piXcIyqnYmLbMKU+EZbIup/YDvL8XBJ3pY69wxq3IwPwMLVsp5EmGtnOSuYS8qADYaGFDLzQDKrYzwXuGJpj/M4n1DJDgQNir7Ak6sSGlvEew/jLLVpYZIADYmGX48KGVvEj8eUXaiPgwNifKTbOs4Y/SCx9rLbBTAXE3uOlCHQh50lOfqMiNSx0MBtBmEGzz9MJbjOivFvyFbNSw06wBUFYyW3Xk272sJ7HqeZ5DvOvy2pralg4QyFCi9qb5CPKjFPPoo7LSuM0Balhp3iNEnrV3sfMtICZUfRaBg2NUTamhoU/2cGoiu95uh7Z4CZl1RwEe4ObqhBEPYR5xVt/EYRKrhk2vwbBdnEwxrtfZr63RRQKQi6nzb8aBHuOp7jii23TldrwkMHnZs4ni/3U0PqJfBp9sa/6d1iELI6aSaSxZ/36KEIGRwyt8+RRzA8e6ChPx+zCc+gxNAeFEePnAI/6BkQBna63FdZw3VNxy2IElLCZcUPze6FLme5zWrKIyAbHaCt3DZ2TdmbuVG0EbvAi2bqh278e4azSbBLeURsjNJDjGkfW8pfS+dDez6HV9b5jtFFFlsu+nGNKa5AaYRl9rpp5lE2Ukk2IB6igSVUYmKAu4rCOSc8JD3OYzZSTz0zyWMIbXPTEe7Yg7PGYjtPLt7RxgoEYddhab8bI30n66aSdc/zjeTZEDWKNXGdIVkZ5zjo5hCy+ZLoS5i1CiDOQXErSaK91ciIIxZ7Pl1iOkG+1eWutdvUR/37zAQ9GoMITnj6bSL6mNDrEWWs5JwjHMRlkF7lOciAI29Tz4wmOaoi3najQ2VVIPd2uXLTkOp/xpJmRCML7KojqeIgddKkMd+QqrVSbFcE9089lC6108jdDDHOVHr5hNyucMmDo59KhvsVjCEIR63iXY3TRyyV6OMUBXmYpmTHvRBF0iNksoIJKFlPkTPPaBKGcfgPbaY9z1sqmgBJKKdKlJ4mbWpxrk7W3TlXZQ4RI2j7o5VQQdqvTa7hvzuNiM/nCgN7l2fRgi+g2sP0sTgdUWMEtVadnpQf7giotzen5xMJ+FVCvpwebQ7tq7qvSg12kBtY+5v/vUBGEZxgDwoQJA99NP6D+A4GOZ0cZ26eTAAAAAElFTkSuQmCC"
        width={24}
        height={24}
        alt="Upwork"
      />
      <span className="font-manrope font-semibold size-[22px] select-none flex items-center justify-center text-xl text-center">
        𝕏
      </span>
    </a>
  );
};
