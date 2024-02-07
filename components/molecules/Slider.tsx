import { Card } from '@/atoms/Card'

const Slider = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(205px,1fr))] mt-10 gap-10 place-content-center">
      <Card seed='random5' />
      <Card seed='random6' />
      <Card seed='random3' />
      <Card seed='random8' />
    </div>
  )
}

export { Slider }
