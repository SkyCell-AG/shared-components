import flow from 'lodash/flow'
import getContacts from './getContacts'
import useQueryGetUserContacts from './useQueryGetUserContacts'

const getLocations = flow([
    getContacts,
    (promise) => {
        return promise.then((contacts = []) => {
            return contacts.map((contact) => {
                return contact.location
            })
        })
    },
])

const useUserLocations = () => {
    return useQueryGetUserContacts(getLocations)
}

export default useUserLocations
