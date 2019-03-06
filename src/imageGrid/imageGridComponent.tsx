import * as React from "react";

import "./imageGridStyle.scss";

export default class ImageGridComponent extends React.PureComponent {
    public render(): JSX.Element {
        const images: string[] = [
            "https://mobirise.com/bootstrap-template/assets/images/hannah-busing-307816-800x1200.jpg",
            "https://mobirise.com/bootstrap-template/assets/images/andre-thomas-weller-333032-800x1200.jpg",
            "https://mobirise.com/bootstrap-template/assets/images/jake-young-168598-800x1200.jpg",
            "https://mobirise.com/bootstrap-template/assets/images/timothy-paul-smith-351366-800x1199.jpg",
            "https://mobirise.com/bootstrap-template/assets/images/carlos-dominguez-342207-2000x1333-800x533.jpg",
            "https://mobirise.com/bootstrap-template/assets/images/maranatha-pizarras-342562-2000x1333-800x533.jpg",
            "https://mobirise.com/bootstrap-template/assets/images/brooke-lark-207271-2000x1333-800x533.jpg",
        ];

        return (
            <div className="flex hCenter">
                <div className="imageGrid flex hSpaceAround wrap">
                    {
                        images.map((imagePath: string, i: number) => (
                            <div key={i} className="imageTile">
                                <img src={imagePath} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
