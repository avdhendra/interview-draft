
type props = {
    value: string,
    label:string
}
type SubProps = {
  key: string,
  value:string
}
export type TemplateProps = {
  title: string,
    sub1:SubProps ,
  sub2: SubProps,
    sub3?:SubProps,
    value:boolean
}

export const GENDER: props[] = [
  { value: "MALE", label: "MALE" },
  { value: "FEMALE", label: "FEMALE" },
  { value: "NON BINARY", label: "NON BINARY" },
]


export const URGENCY:props[] = [
    { value: "URGENT", label: "URGENT" },
  { value: "IMMEDIATELY", label: "IMMEDIATELY" },
  { value: "RELEAXED", label: "RELEAXED" },
]


export const INTERVIEW: props[] = [
   { value: "ONLINE", label: "ONLINE" },
  { value: "OFFLINE", label: "OFFLINE" },
]

export const DURATION: props[] = [
  { value: "SHORT", label: "SHORT" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "LONG", label: "LONG" },
]

export const LOCATION: props[] = [
   { value: "ENGLISH", label: "ENGLISH" },
  { value: "HINDI", label: "HINDI" }
]




