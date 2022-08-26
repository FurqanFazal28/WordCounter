import React from 'react'

export default function About(props) {
  return (
    <div className={`container text-${props.mode==="light"?"dark":"light"}`} style={{textAlign:'center',padding:'8%'}}>
    <h1 className='display-1'>About Us</h1>
    <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore eum, esse quos, beatae molestias, harum dolore praesentium odit sequi nemo atque accusantium a rem deserunt eveniet aut fuga exercitationem ratione? Beatae minus sint deserunt, nemo sed maxime, nulla recusandae quae doloremque iure ratione rem asperiores repudiandae, consequuntur similique at exercitationem consequatur magnam quos. Omnis, vero et aliquid, optio vitae quod laudantium hic quibusdam molestiae delectus corrupti voluptate. Ab praesentium quo, illo quaerat reprehenderit delectus provident non iure reiciendis impedit fugit hic rem obcaecati, itaque ea, ipsam aliquam sunt! Explicabo neque quae nobis! Libero quis illo iure minus, repudiandae velit.
    </p>
    </div>
  )
}
