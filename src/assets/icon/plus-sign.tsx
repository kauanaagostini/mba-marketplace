import { iconsTypeProps } from '@/types/iconsType'

export const PlusSignIcon = ({ color, width, height }: iconsTypeProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4.33325C16.5523 4.33325 17 4.78097 17 5.33325V14.9999H26.6667C27.219 14.9999 27.6667 15.4476 27.6667 15.9999C27.6667 16.5522 27.219 16.9999 26.6667 16.9999H17V26.6666C17 27.2189 16.5523 27.6666 16 27.6666C15.4478 27.6666 15 27.2189 15 26.6666V16.9999H5.33337C4.78109 16.9999 4.33337 16.5522 4.33337 15.9999C4.33337 15.4476 4.78109 14.9999 5.33337 14.9999H15V5.33325C15 4.78097 15.4478 4.33325 16 4.33325Z"
      fill={color}
    />
  </svg>
)
