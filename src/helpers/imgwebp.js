export const ImgWebp = ({ usemap, srcWebp, src2x, src, lazy }) => {
  if (lazy) {
    return (
      <picture>
        {/* <source srcset="/images/cereal-box.webp" type="image/webp" />
        <source srcset="/images/cereal-box.jp2" type="image/jp2" /> */}

        <source srcSet={srcWebp} type={'image/webp'} />
        <source srcSet={`${src} 1x, ${src2x} 2x`} />
        <img loading='lazy' useMap={usemap} src={src} alt='' />
      </picture>
    );
  } else {
    return (
      <picture>
        {/* <source srcset="/images/cereal-box.webp" type="image/webp" />
        <source srcset="/images/cereal-box.jp2" type="image/jp2" /> */}

        <source srcSet={srcWebp} type={'image/webp'} />
        <source srcSet={`${src} 1x, ${src2x} 2x`} />
        <img useMap={usemap} src={src} alt='' />
      </picture>
    );
  }
};
