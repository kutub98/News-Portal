import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
 
export default function Error() {
  return (
    <div>
      <img src='https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png'
      height={"100%"} width={"100%"}/>

      <Link href={"/"}>
      <Button type="primary">Back to Home</Button>
      </Link>
    </div>
  )
}