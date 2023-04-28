    
    import { useQuery, gql } from "@apollo/client";
    import Moment from "react-moment";
    
  


    import Skeleton from 'react-loading-skeleton'
    import 'react-loading-skeleton/dist/skeleton.css'

    
export default function EventRegistration({eventId}) {
    const QUERY = gql`
    query {
        eventRegistrations(eventId: "${eventId}") {
          id
          user {
            firstName
            lastName
            email
          }
            createdAt
        }
      }
`;
    const { data,refetch, loading, error } = useQuery(QUERY);


    if (loading)
    return (

        <Skeleton count={10}/>


   
    );

    return (
        <table class="table mt-2">
        <thead class="bg-info text-white">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Registered Date</th>
            </tr>
        </thead>
        <tbody>
            {data.eventRegistrations.map((eventRegistration, index) => (
                <tr key={eventRegistration.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{eventRegistration.user.firstName} {eventRegistration.user.lastName}</td>
                    <td>{eventRegistration.user.email}</td>
                    <td><Moment format="DD/MM/YYYY">{eventRegistration.createdAt}</Moment></td>
                </tr>
            ))}
             </tbody>
        </table>
    )
}