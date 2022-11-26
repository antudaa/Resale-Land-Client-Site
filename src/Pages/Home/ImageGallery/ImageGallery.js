import { PhotoAlbum } from "react-photo-album";
import { PhotoProvider, PhotoView } from "react-photo-view";



const ImageGallery = () => {

    const photos = [
        {
            src: "https://www.wrapstyle.com/content/img_cache/800x450/1595335225-Range-Rover-SVR-Grey-Matt-wrap-4-.jpg",
            width: 400,
            height: 200
        },
        {
            src: "https://imgd.aeplcdn.com/0x0/n/cw/ec/28085/landrover-range-rover-velar-interior6.jpeg",
            width: 600,
            height: 400
        },
        {
            src: "https://i0.wp.com/newportconvertible.com/wp-content/uploads/2012/04/14Equus1100NSC-td2A10-20-1.jpg?fit=1024%2C593&ssl=1",
            width: 1200,
            height: 800
        },
        {
            src: "https://image-cdn.beforward.jp/large/202011/2140000/BH608529_4bdef6.jpg",
            width: 600,
            height: 450
        },
        {
            src: "https://i.pinimg.com/originals/ac/94/0a/ac940ab0e95c0f96985567308f3cb3d3.jpg",
            width: 1000,
            height: 700
        },
        {
            src: "https://imgd.aeplcdn.com/640X480/cw/ucp/stockApiImg/Z555LAH_27305a8259a4477890b0a54648e41171_1_25102173.jpg?q=75",
            width: 1300,
            height: 900
        },
        {
            src: "https://cars.usnews.com/pics/size/390x290/images/Auto/izmo/i2320526/2016_audi_tt_coupe_rearseat.jpg",
            width: 1000,
            height: 800
        },
        {
            src: "https://renty.ae/cdn-cgi/image/format=auto,fit=contain/https://renty.ae/uploads/car/photos/l/white_mercedes-e-class_2019_10033_cc02c53f64721d30020b18af709f7f97.jpg",
            width: 1600,
            height: 1200
        },
        {
            src: "https://cars.usnews.com/static/images/Auto/izmo/326054/2011_mercedes_benz_e_class_frontseat.jpg",
            width: 1000,
            height: 700
        },
        {
            src: "https://i.ytimg.com/vi/zgyLCPwmmTY/maxresdefault.jpg",
            width: 1200,
            height: 800
        },
        {
            src: "https://d46-a.sdn.cz/d_46/c_img_gV_u/k0RBhm.jpeg?fl=exf|crr,1.33333,2|res,1024,768,1|wrm,/watermark/sbazar.png,10,10|jpg,80,,1",
            width: 1000,
            height: 1200
        },
        {
            src: "https://s3-eu-west-1.amazonaws.com/img4.haraj.com.sa/cache4/348x464-1_-uTSogmxi4e4iYl.jpg",
            width: 600,
            height: 700
        },
        {
            src: "https://laptopworld.vn/media/product/9857_dell_xps_17_9710_2.jpg",
            width: 1000,
            height: 720
        },
        {
            src: "https://www.megabites.com.ph/wp-content/uploads/2021/04/hp-probook.jpg",
            width: 1000,
            height: 590
        }
    ];


    return (
        <div>
            <div className="lg:px-20 px-4 lg:pt-20 text-start text-2xl lg:text-5xl font-bold text-slate-800">
                <h1>Top Products</h1>
            </div>
            <div className='lg:p-20 p-4'>
            <PhotoProvider>
                <PhotoView src=''>
                    <PhotoAlbum layout="masonry" photos={photos} />
                </PhotoView>
            </PhotoProvider>

            {/* <PhotoAlbum layout="columns" photos={photos} /> */}

        </div>
        </div>
    );
};

export default ImageGallery;

