import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

const Header = ({ title }: { title: string }) => {
  const router = useRouter()

  return (
    <div
      className="flex items-center justify-between relative h-20"
      data-testid="test-header"
    >
      <div>
        {router.pathname !== "/" && (
          <a
            onClick={() => {
              router.back()
            }}
            className="cursor-pointer"
            data-testid="test-header-back"
          >
            <Image
              src="/images/back-arrow.png"
              alt="back-arrow"
              width={30}
              height={30}
            />
          </a>
        )}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <div>
        <a>
          <Image
            src="/images/log-out.png"
            alt="back-arrow"
            width={30}
            height={30}
          />
          <p>Logout</p>
          <p>Miss Mackay</p>
        </a>
      </div>
    </div>
  )
}

export default Header
