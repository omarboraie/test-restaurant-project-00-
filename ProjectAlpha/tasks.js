class Tasks{
    constructor(name,date,description,pDegree,status,dependOn){
        this.id = 't'+((Math.random().toFixed(2))*100)+((Math.random().toFixed(2))*100).toFixed(0);
        this.name = name;
        this.date = date;
        this.description = description;
        this.pDegree = pDegree;
        this.status = status;
        this.dependOn = dependOn;
    }

}
module.exports = Tasks;