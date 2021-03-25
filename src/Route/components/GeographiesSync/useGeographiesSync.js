import {
    useContext,
    useMemo,
} from 'react'
import {
    MapContext,
} from 'react-simple-maps'
import {
    getFeatures,
    getMesh,
    prepareFeatures,
    prepareMesh,
} from './utils'

const useGeographiesSync = ({
    geography,
    parseGeographies,
}) => {
    const {
        path,
    } = useContext(MapContext)

    const output = useMemo(() => {
        return {
            geographies: getFeatures(geography, parseGeographies),
            mesh: getMesh(geography),
        }
    }, [
        geography,
        parseGeographies,
    ])

    const {
        geographies, outline, borders,
    } = useMemo(() => {
        const mesh = output.mesh || {}
        const preparedMesh = prepareMesh(mesh.outline, mesh.borders, path)

        return {
            geographies: prepareFeatures(output.geographies, path),
            outline: preparedMesh.outline,
            borders: preparedMesh.borders,
        }
    }, [
        output,
        path,
    ])

    return {
        geographies,
        outline,
        borders,
    }
}

export default useGeographiesSync
