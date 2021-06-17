import React, {useEffect, useState} from 'react';
import useLocalization from "../../../../hooks/useLocalization";
import styles from "./styled";

const {
    BannerWrapper,
    BannerContent,
    BannerWelcome,
    BannerTitle,
    BannerButtonCover,
    BannerButton
} = styles;

function Banner() {
    const [height, setHeight] = useState<number>(window.innerHeight);
    const {trans} = useLocalization();

    useEffect(() => {

        const handleChange = (event: any) => setHeight(event.target.innerHeight);

        window.addEventListener('resize', handleChange);

        return () => {
            window.removeEventListener('resize', handleChange);
        }

    }, [height])


    return (
        <div>
            <BannerWrapper height={`${height - 60}px`}>
                <div>
                    <BannerContent>
                        <BannerWelcome>{trans('banner.welcome')}</BannerWelcome>
                        <BannerTitle>{trans('banner.web_name')}</BannerTitle>
                        <BannerButtonCover>
                            <BannerButton>{trans('banner.change_language')}</BannerButton>
                            <BannerButton>{trans('banner.about')}</BannerButton>
                        </BannerButtonCover>
                    </BannerContent>
                </div>
            </BannerWrapper>
        </div>

    )
}

export default Banner;