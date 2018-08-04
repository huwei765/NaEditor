import React from 'react';

import Module from '../Module';
import { IModuleData } from '../interface';
import { ImageInfo } from '../ImageHotspotConfig/interface';

interface ImageHotspotProps {
    moduleData: IModuleData;
}

interface ImageHotspotState {
    imgs: ImageInfo[];
}

export default class ImageHotspot extends React.Component<ImageHotspotProps, ImageHotspotState> {
    constructor(props: ImageHotspotProps) {
        super(props);
        const { imgs } = props.moduleData.data;
        this.state = {
            imgs,
        };
    }

    renderImgs = (imgs: ImageInfo[]) => {
        return (
            imgs.map((v, i) => (<img key={i} src={v.url} />))
        );
    }

    render() {
        let {
            moduleData,
            moduleData: {
                data: {
                    imgs,
                },
            },
        } = this.props;
        if (imgs === undefined) {
            imgs = [];
        }
        return (
            <Module moduleData={moduleData}>
                {this.renderImgs(imgs)}
            </ Module>
        );
    }
}