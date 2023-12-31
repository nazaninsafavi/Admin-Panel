import React, { useEffect,useState } from "react"
import { Container,Row,Button } from "react-bootstrap"
import Table from "react-bootstrap/Table"
import { Link, useNavigate} from "react-router-dom"
import { getPostServices } from "../../Services/PostServices"

const Posts=()=>{
    const [posts, setPosts]=useState([])
    const navigate=useNavigate()
    const[mainPosts, setMainPosts]=useState([])
    const [uId,setuId]=useState([''])

    const getPosts = async()=>{
        const res =await getPostServices();
        setPosts(res.data);
        setMainPosts(res.data)
    }
    useEffect(()=>{
        getPosts();

        // this function will return something when user leaved the component.
        return()=>{
            console.log('leave component')
        }

      
    },[])

    useEffect(()=>{
        handleSearch();
    },[uId])

    const handleSearch=()=>{
        if(uId>0)setPosts(mainPosts.filter(p=>p.userId===uId))
        else setPosts(mainPosts)
    }

    const handleDelete=()=>{}

    return(
        <>
         <div className="d-flex justify-content-center">
            <h4>Manage Posts</h4>
        </div>
        <Container>
            <Row>
            <div className="d-flex justify-content-between">
                  <input type="num" className="myUser" placeholder="Search User" onChange={(e)=>setuId(e.target.value)}></input>
                  <Link to='/Posts/Add'>
                    <Button className="btn btn-success myBtn">+</Button>
                  </Link>
                  
               
             </div>
             <div className="d-flex justify-content-center table">
                {posts.length ? (
                    <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Operations</th>

                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(u=>(
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                  <td>{u.userId}</td>
                                  <td>{u.title}</td>
                                  <td>{u.body}</td>
                                  <td>
                                      <i className="fa fa-edit icon-edit" aria-hidden="true"
                                      onClick={()=>{
                                          return navigate(`/Posts/Add/${u.id}`)
                                      }}></i>
                                      
                                      
                                  <i className="fa fa-trash icon" aria-hidden="true"
                                  onClick={()=>handleDelete(u.id)}></i>
                                  </td>
      
                            </tr>

                        ))}
                  
                    </tbody>
                </Table>

                ) : (
                    <h4 className="text-center text-info">Please wait...</h4>
                )}
                

             </div>
            </Row>
            
        </Container>

        </>
       
    )
}

export default Posts