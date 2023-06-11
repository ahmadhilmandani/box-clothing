import adult from '../../assets/adult.jpg';
import kid from '../../assets/kid.jpg';
import Card from '../../components/Card';

function Home() {
  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://images.unsplash.com/photo-1560774358-d727658f457c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  return (
    <>
      <div className="w-full min-h-screen p-8 flex justify-center items-center">
        <div className='w-full h-full'>
          <div className="flex justify-between gap-2">
            {categories.map((ObjVal) => {
              if (ObjVal.title !== "womens" && ObjVal.title !== "mens")
                return (
                  <Card backgroundSrc={ObjVal.imageUrl} item={ObjVal.title} />
                )
            })}
          </div>
          <div className="mt-2 flex justify-between gap-2">
            <Card backgroundSrc={kid} item={'kids'} />
            <Card backgroundSrc={adult} item={'adults'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;