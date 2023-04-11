$(document).ready(function () {


    function progressLine() {
        var
            $progressLine = $('.progress-line')


        $progressLine.each(function () {
            var
                $progressLine = $(this),
                $doneLine = $progressLine.find('.progress-line__done'),
                $generalValue = $progressLine.data('general'),
                $doneValue = $progressLine.data('done'),
                $doneWidth = $doneValue / $generalValue * 100


            $doneLine.css({'width': $doneWidth + '%'})

        })





    }


    progressLine()

})
