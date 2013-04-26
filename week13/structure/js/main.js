console.log('Project initiating...')

var MyProject = {

    boot: function () {

        console.log('Main object boot started!')

        MyProject.component1.boot()
        MyProject.component2.boot()

        console.log('All components booted!')

    }

}