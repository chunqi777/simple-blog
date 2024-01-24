import React, { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLElement> {
  width?: string;
  strokeWidth?: number;
}

const defaultProps: IconProps = {
  width: "20px",
  strokeWidth: 1.5,
}

export const SearchIcon: React.FC<IconProps> = (props: IconProps) => {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={mergedProps.strokeWidth} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </i>
  )
}

export const CheckIcon: React.FC<IconProps> = (props: IconProps) => {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </i>
  )
}

export const PlusIcon: React.FC<IconProps> = (props: IconProps) => {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </i>
  )
}

export const XMarkIcon: React.FC<IconProps> = (props: IconProps) => {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </i>
  )
}

export const PencilSquareIcon: React.FC<IconProps> = (props: IconProps) => {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    </i>
  )
}

export const TrashIcon: React.FC<IconProps> = (props: IconProps) => {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    </i>
  )
}

export const ChevronRightIcon: React.FC<IconProps> = (props: IconProps) => {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </i>
  )
}

export const ChevronLeftIcon: React.FC<IconProps> = (props: IconProps) => {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </i>
  )
}

export const XCircleIcon: React.FC<IconProps> = (props: IconProps) => {
  const mergedProps = { ...defaultProps, ...props };
  return (
    <i className={"block " + mergedProps.className} style={{ color: mergedProps.color, width: mergedProps.width, height: mergedProps.width }}>
      <svg data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </i>
  )
}