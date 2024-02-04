import { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLElement> {
  width?: string;
  strokeWidth?: number;
}

const defaultProps: IconProps = {
  width: "20px",
  strokeWidth: 1.5,
}
export function SearchIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </i>
  )
}

export function CheckIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </i>
  )
}

export function PlusIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </i>
  )
}

export function XMarkIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </i>
  )
}


export function PencilSquareIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    </i>
  )
}


export function TrashIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    </i>
  )
}


export function ChevronRightIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </i>
  )
}


export function ChevronLeftIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </i>
  )
}


export function XCircleIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </i>
  )
}


export function UserIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </i>
  )
}


export function KeyIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
      </svg>
    </i>
  )
}


export function TimeIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
      </svg>
    </i>
  )
}


export function FoldIcon(props: IconProps) {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg value-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
    </i>
  )
}