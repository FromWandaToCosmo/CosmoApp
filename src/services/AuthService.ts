import LocalStorageService from './LocalStorageService'
import HistoryService from './HistoryService'
import PathConstants from '../constants/PathConstants'
import Hash from 'hash.js'

class GoogleAuthService {

    validHash = '9d65a8cedc8c91a8fb2fd99baa5e35024683b47cfe6c8738dd7c31e07357cd54e586531ef2582c795f95d9951890d5868271720186791ce4732c11c73edc3c6f'

    login = (keyword: string): boolean => {
        LocalStorageService.setKeyWord(keyword)

        if(this.isAuthenticated()) {
            HistoryService.push(PathConstants.HOME)
            
            return true
        }

        return false
    }

    logout = () => {
        LocalStorageService.removeKeyWord()

        HistoryService.push(PathConstants.LOGIN)
    }

    isAuthenticated = () : boolean => (
        this.isValidAuthentication(LocalStorageService.getKeyWord())
    )

    isValidAuthentication = (hash: string) : boolean => (
        this.generateHash(hash.trim().toLowerCase()) === this.validHash
    )

    getKeyWord = () : string => (
        LocalStorageService.getKeyWord()
    )

    private generateHash = (str: string): string => (
        Hash.sha512().update(str).digest('hex')
    )
}

export default new GoogleAuthService()