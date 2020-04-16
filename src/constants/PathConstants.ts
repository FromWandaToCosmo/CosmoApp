class PathConstants {
    LOGIN: string = '/'

    APP: string = '/app'

    HOME: string = this.APP + '/home'

    PHOTOS: string = this.APP + '/photos'

    VIDEO: string = this.APP + '/video'
}

export default new PathConstants()