import LocalStorageKeysConstants from "../constants/LocalStorageKeysConstants"


class LocalStorageService {
    private get = (key: string) : string | null => {
        return localStorage.getItem(key)
    }

    private set = (key: string, value: string) => {
        if (!key) {
            throw Error("Chave inválida!")
        } else {
            return localStorage.setItem(key, value)
        } 
    }

    private remove = (key: string) => {
        if (!key) {
            throw Error("Chave inválida!")
        } else {
            return localStorage.setItem(key, '')
        } 
    }

    getKeyWord = (): string => {
        const keyword = this.get(LocalStorageKeysConstants.KEY_WORD)

        return this.stringOrNullToString(keyword)
    }

    setKeyWord = (keyword: string) => {
        this.set(LocalStorageKeysConstants.KEY_WORD, keyword)
    }

    removeKeyWord = () => {
        this.remove(LocalStorageKeysConstants.KEY_WORD)
    }

    private stringOrNullToString = (nullableString: string | null): string => {
        return nullableString ? nullableString : ''
    }
}

export default new LocalStorageService()