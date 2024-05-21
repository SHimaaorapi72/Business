

import { useState } from 'react';


import img3 from '../../Assets//imgs/photo1716043635 (3).jpeg'
import img6 from '../../Assets//imgs/photo1716043717.jpeg'
import img7 from '../../Assets//imgs/photo1716043790 (1).jpeg'
import img8 from '../../Assets//imgs/photo1716284800.jpeg'
import img9 from '../../Assets//imgs/photo1716284902.jpeg'
import img10 from '../../Assets//imgs/photo1716284968.jpeg'
import img11 from '../../Assets//imgs/photo1716285177.jpeg'
import img12 from '../../Assets//imgs/photo1716285337.jpeg'
import img13 from '../../Assets//imgs/photo1716285509.jpeg'
import img14 from '../../Assets//imgs/photo1716285691.jpeg'
import img15 from '../../Assets//imgs/photo1716285823.jpeg'
import img16 from '../../Assets//imgs/photo1716286384.jpeg'
import img17 from '../../Assets//imgs/photo1716286450.jpeg'
import img18 from '../../Assets//imgs/photo1716286882.jpeg'
import img19 from '../../Assets//imgs/photo1716286942.jpeg'
import img20 from '../../Assets//imgs/photo1716288121.jpeg'
import img21 from '../../Assets//imgs/photo1716288161.jpeg'
import img22 from '../../Assets//imgs/photo1716288275.jpeg'
import img23 from '../../Assets//imgs/photo1716288343.jpeg'
import img24 from '../../Assets//imgs/photo1716288446.jpeg'
import img25 from '../../Assets//imgs/photo1716288596.jpeg'
import img26 from '../../Assets//imgs/photo1716289028.jpeg'
import img27 from '../../Assets//imgs/photo1716289072.jpeg'
import img28 from '../../Assets//imgs/photo1716289399.jpeg'
import img29 from '../../Assets//imgs/photo1716289511.jpeg'
import img30 from '../../Assets//imgs/photo1716302669.jpeg'
import img31 from '../../Assets//imgs/photo1716302761.jpeg'
import img33 from '../../Assets//imgs/photo1716302950.jpeg'
import img34 from '../../Assets//imgs/photo1716303675.jpeg'
import img35 from '../../Assets//imgs/photo1716303744.jpeg'
import img36 from '../../Assets//imgs/photo1716303910.jpeg'
import img37 from '../../Assets//imgs/photo1716303988.jpeg'
import img38 from '../../Assets//imgs/photo1716304090.jpeg'
import img39 from '../../Assets//imgs/photo1716304128.jpeg'
import img40 from '../../Assets//imgs/photo1716308265.jpeg'
import img41 from '../../Assets//imgs/photo1716308311.jpeg'
import img42 from '../../Assets//imgs/photo1716308357.jpeg'
import img43 from '../../Assets//imgs/photo1716308384.jpeg'
import img44 from '../../Assets//imgs/photo1716308455.jpeg'
import img45 from '../../Assets//imgs/photo1716308515.jpeg'
import img46 from '../../Assets//imgs/photo1716308610.jpeg'
import img47 from '../../Assets//imgs/photo1716308658.jpeg'
import img48 from '../../Assets//imgs/photo1716308748.jpeg'
import img49 from '../../Assets//imgs/photo1716308955.jpeg'
import img50 from '../../Assets//imgs/photo1716309004.jpeg'
import img51 from '../../Assets//imgs/photo1716309028.jpeg'
import img52 from '../../Assets//imgs/photo1716309078.jpeg'
import img53 from '../../Assets//imgs/photo1716309114.jpeg'
import img54 from '../../Assets//imgs/photo1716309177.jpeg'
import img55 from '../../Assets//imgs/photo1716309280.jpeg'
import img56 from '../../Assets//imgs/photo1716309391.jpeg'
import img57 from '../../Assets//imgs/photo1716309448.jpeg'
import img58 from '../../Assets//imgs/photo1716309561.jpeg'
import img59 from '../../Assets//imgs/photo1716309616.jpeg'
import img60 from '../../Assets//imgs/photo1716309666.jpeg'
import img61 from '../../Assets//imgs/photo1716309716.jpeg'
import img62 from '../../Assets//imgs/photo1716309772.jpeg'
import img63 from '../../Assets//imgs/photo1716309811.jpeg'



import Notification from './../Notification/Notification';




function HomeCards({ addToCart }) {

  const [products , setProducts] = useState([
   
    { id: 3, name: 'رول لازاله الوبر', price: '٣٠ جنيه', image: img3 },
    { id: 6, name: 'زجاجة صوصات للكاتشب والمايونيز', price: '٤٥ جنيه', image: img6 },
    { id: 7, name: 'قشارة بطاطس ', price: ' ٢٠ جنيه', image: img7 },
    { id: 8, name: 'البرطمان بالمعلقه', price: '٢٥ ج للقطعه الواحده', image: img8 },
    { id: 9, name: 'فرشة سيلكون.. زياته بالخزان', price: '٥٠ جنيه', image: img9 },
    { id: 10, name: 'صدادة باب ', price: '٥٠ جنيه', image: img10 },
    { id: 11, name: 'ديسبنسر', price: '٢١٠ جنيه', image: img11 },
    { id: 12, name: 'قطاعه (بطاطس شيبسي - صوابع - بصل-خيار -طماطم) تفرم (ثوم) تبشر(جزر) تكسر (بندق)', price: '١٦٠ جنيه', image: img12},
    { id: 13, name: 'طقم معالق مكون من 4 قطع معلقه كبيره+شوكه كبيره+معلقه صغيره+سكينه متاح لون ابيض..اسود..بينك جميع الالوان', price: ' ١٦٠ جنيه', image: img13},
    { id: 14, name: 'علبة منديل بورسلين', price: '٢٨٠ جنيه', image: img14},
    { id: 15, name: 'برطمان زجاج بغطاء خشب', price: 'الكبير..250 جنيه الوسط..230 جنيه الصغير..180 جنيه', image: img15},
    { id: 16, name: 'عازل بيض بيد خشب ', price: '١٥٠ جنيه', image: img16},
    { id: 17, name: 'زياته براد ..خامه زجاج', price: '٢٧٠ جنيه', image: img17},
    { id: 18, name: 'مرايه ليد ب 3 اضاءات', price: '٢٠٠ جنيه ', image: img18},
    { id: 19, name: 'طقم علب صاج مدور بغطاء لون نحاسي', price: '٥٧٠ جنيه', image: img19},
    { id: 20, name: 'حامل اكياس تزيين حامل بلاستيك للكيك والتورتة مقاس 30سم', price: '٨٥ جنيه ', image: img20},
    { id: 21, name: ' كنكه بيركس على نار  مباشر ', price: ' ٢٥٠ جنيه ', image: img21},
    { id: 22, name: ' منظم ٣ دور للمجوهرات والاكسسوارات خامه اكريلك', price: '١٤٠ جنيه ', image: img22},
    { id: 23, name: 'حلة زجاج علي النار مباشرة..زجاج بيركس حراري بتدخل ميكرويف وغسالة اطباق ', price: '  ٢٣٠ جنيه', image: img23},
    { id: 24, name: ' برطمانات توابل زجاج بغطاء خشب بامبو..سعة 120 ملي', price: 'القطعه ٤٥ جنيه ', image: img24},
    { id: 25, name: 'طقم علب اكريلك ٤ قطع ..اكريلك شفاف بغطاء محكم الغلق ..مقاس  1000ملي / مقاس 800 ملي ..مقاس 600 ملي / مقاس 400 ملي ', price: '٢٠٠ جنيه ', image: img25},
    { id: 26, name: '  مريله مطبخ ..مريله ووتر بروف تقيله.. مزوده 4 جيب.. متوفر منها 5 الوان', price: ' ١٧٠ جنيه', image: img26},
    { id: 27, name: 'مفرمه توم بالدرج الجامبو ٣×١ ', price: ' ٥٠ جنيه', image: img27},
    { id: 28, name: 'شمعه الكترونيه تعمل بالبطاريه ', price: 'الطقم  ٣٧٥ جنيه ', image: img28},
    { id: 29, name: 'علبة مناديل ', price: '٣٢٥  جنيه ', image: img29},
    { id: 30, name: 'عصاره برتقال ..العصاره تعمل بالشحن ..مزوده بوصله usb  ', price: ' ٤٠٠ جنيه', image: img30},
    { id: 31, name: 'عصاره برتقال وليمون مصنوعة من الألومنيوم المقاوم للصدأ ', price: '١٨٠ جنيه ', image: img31},
    { id: 33, name: 'مج زجاج حلزوني للعصاير و البيبسي والايس كوفي  ', price: '٨٠ جنيه ', image: img33},
    { id: 34, name: ' طقم ثلاجه ٥*١', price: '٩٠ جنيه ', image: img34},
    { id: 35, name: 'علبه مناديل ', price: ' ٨٠ جنيه', image: img35},
    { id: 36, name: 'صواني خشب ', price: ' ٤٣٠ جنيه', image: img36},
    { id: 37, name: ' منظم ', price: '١١٠ جنيه ', image: img37},
    { id: 38, name: 'مج الجميلة والوحش ', price: ' ٣٢٥ جنيه', image: img38},
    { id: 39, name: ' مج ميكي ماوس', price: '٣٢٥ جنيه ', image: img39},
    { id: 40, name: ' فرشه قشور السمك', price: '٢٥ جنيه ', image: img40},
    { id: 41, name: ' مج توم وجيري', price: '٢٨٥ جنيه ', image: img41},
    { id: 42, name: ' المجين بسعر', price: '٢٨٥ جنيه ', image: img42},
    { id: 43, name: ' مج بطوط', price: ' ٢٨٥ جنيه', image: img43},
    { id: 44, name: ' منظم مكون من ٣ قطع', price: ' ٢٩٠ جنيه', image: img44},
    { id: 45, name: 'اكبر وش نسكافيه سعة 350 مللي ', price: '١١٠ جنيه ', image: img45},
    { id: 46, name: ' منظم اكسسورات وادويه مكون من ٥٤ قطعه كل ٤ قطعه منفصلين فى دور واحد', price: ' ٩٠ جنيه', image: img46},
    { id: 47, name: ' منظم اكسسوارات', price: ' ١٩٠ جنيه', image: img47},
    { id: 48, name: 'باسكت زباله معدن 3 احجام معدن و غير قابل للصدأ  ', price: 'حجم الكبير 35*30 بسعر ١١٠ جنيه والحجم الوسط 26*28 بسعر ١٠٠  جنيه والحجم الصغير 23*26 بسعر ٨٥ جنيه ', image: img48},
    { id: 49, name: 'باسكت درفه قمامه سيلكون ومعاه درج رول القمامه وحامل اكياس وبيتحط ع الارض ', price: ' ١٣٠ جنيه', image: img49},
    { id: 50, name: ' مج سعته 55 مللي', price: ' ٨٥ جنيه ', image: img50},
    { id: 51, name: ' مج اكليريك', price: '٥٠ جنيه ', image: img51},
    { id: 52, name: ' طقم مج قهوه زجاج حراري على النار مباشره ٦ قطع ', price: ' ١٢٥ جنيه', image: img52},
    { id: 53, name: ' طقم مج قهوه زجاج حراري على النار مباشره ٦ قطع', price: ' ١٢٥ جنيه  ', image: img53},
    { id: 54, name: ' ٢ قطعه جاونت للمطبخ', price: ' ٥٠ جنيه', image: img54},
    { id: 55, name: ' كبه usb حجم ميني...بالشحن ملحق معاها وصله usb  الخامه الاكراليك 250مللى', price: ' ١٢٥ جنيه ', image: img55},
    { id: 56, name: '  جاروف توابل ', price: 'الباكت 6 قطع بسعر ٥٠ جنيه والباكت 4 قطع بسعر ٤٠ جنيه ', image: img56},
    { id: 57, name: 'دورق بايريكس زجاج حراري علي النار مباشر سعه 1500 ', price: '٥٧٠ جنيه ', image: img57},
    { id: 58, name: 'كوستر كوبايات ليد مضئ ب 3 اوضاع مختلفة ', price: '  ١٠٠ جنيه    ', image: img58},
    { id: 59, name: 'وناسه ديكور ', price: '  ٣٧٠ جنيه', image: img59},
    { id: 60, name: ' منظم سلاكة اسنان ع شكل بومه', price: ' ١٢٥ جنية', image: img60},
    { id: 61, name: 'مج زجاج سعه ٣٥٠  ', price: ' ١٠٠ جنيه ', image: img61},
    { id: 62, name: ' طقم توابل زجاج 4 قطع + قاعده ', price: '٤٢٥ جنيه ', image: img62},
    { id: 63, name: ' منظم اكسسوارات', price: '٢٨٠ جنيه ', image: img63},
  
  ])
 
  const [notification, setNotification] = useState('');
      const handleClick = (product) => {
        addToCart(product);
        setNotification("Item added to cart successfully!");
        
      };

    console.log(addToCart)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
  
 
  
    const openModal = (product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedProduct(null);
      setIsModalOpen(false);
    };
  

  return (
    <div className="container mx-auto flex justify-center items-center mt-20">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map((product) => (
        <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
          <a  onClick={() => openModal(product)}>
            <img className="p-4 rounded-t-lg h-[350px] w-[350px] cursor-pointer" src={product.image} alt="product image" />
          </a>
          <div className="px-5 pb-5 flex flex-col justify-between flex-grow">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white pb-5">{product.name}</h5>
            </a>
            <div className="flex flex-col justify-between flex-grow">
              <span className="text-2xl font-bold text-gray-700 dark:text-white mb-5">{product.price}</span>
              <button type="button" onClick={() => handleClick(product)} className="text-white bg-gradient-to-r from-pink-400 via-pink-400 to-pink-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
                أضف للسلة
              </button>
              <Notification message={notification} duration={1000} onClose={() => setNotification('')} />
            </div>
          </div>
        </div>
      ))}
    </div>

    {isModalOpen && selectedProduct && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-2xl max-h-full p-4">
          <button onClick={closeModal} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700">
            &times;
          </button>
          <div className="p-4 md:p-5 space-y-4">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="h-[400px] w-[500px]" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedProduct.name}</h3>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{selectedProduct.price}</p>
          </div>
        </div>
      </div>
    )}
  </div>
  
    
  )
}


export default HomeCards