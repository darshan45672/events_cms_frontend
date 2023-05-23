    
    import { useQuery, gql } from "@apollo/client";
    import Moment from "react-moment";
    
    import Link from 'next/link'


    import Skeleton from 'react-loading-skeleton'
    import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
    
export default function BranchEventTable({branchId}) {
    const SINGLE_BRANCH_EVENT_QUERY = gql`
    query {
        branch(where: { id: "${branchId}" }) {
          id
          name
          createdAt
          updatedAt
          events {
            id
            title
            description
            startDate
            endDate
            venue
            createdAt
            updatedAt
            eventRegistrations{
              user {
                firstName
                lastName
                email
                id
              }
            }
          }
        
        }
      }
`;
    const { data,refetch, loading, branch } = useQuery(SINGLE_BRANCH_EVENT_QUERY);


    if (loading)
    return (

        <Skeleton count={10}/>


   
    );

    function deleteEvent(id){
        axios.delete(`http://localhost:3000/api/events/${id}`).then(res => {
            toast.success("Deleted Successfully", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
            refetch();
            }).catch(err => {
            console.log(err);
            })
    }

    return (
        <table class="table mt-2">
        <thead class="bg-info text-white">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Registrations</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.branch.events.map((event, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{event.title}</td>
                            <td>
                            <Moment format="DD/MM/YYYY h:mm a" >{event.startDate}</Moment>
                            </td>
                            <td>
                            <Moment format="DD/MM/YYYY h:mm a" >{event.endDate}</Moment>
                            </td>
                            <td>{event.eventRegistrations.length}</td>
                            <td>
            

                                <Link href={`/events/registrations/${event.id}`}>
                                <button type="button" class="btn btn-success ms-1 ml-2 p-2 mb-2">
                                    View
                                </button>
                               
                                </Link>
                                <button type="button" class="btn btn-danger ms-1 ml-2 p-2 mb-2" onClick={() => deleteEvent(event.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
             </tbody>
        </table>
    )
}