angular.module('ag.service', []).filter('elapsedTime', ['$filter', function($filter) {
    // elapsed time (in article)
    return function(input) {
        var date1 = new Date();
        var date2 = new Date(input * 1000);

        var diff = date1.getTime() - date2.getTime();
        if (diff <= 0) return $filter('translate')('Time.JustNow');

        var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        if (years === 1) return years + ' ' + $filter('translate')('Time.YearAgo');
        if (years > 0) return years + ' ' + $filter('translate')('Time.YearsAgo');

        var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        if (months === 1) return months + ' ' + $filter('translate')('Time.MonthAgo');
        if (months > 0) return months + ' ' + $filter('translate')('Time.MonthsAgo');

        var weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        if (weeks === 1) return weeks + ' ' + $filter('translate')('Time.WeekAgo');
        if (weeks > 0) return weeks + ' ' + $filter('translate')('Time.WeeksAgo');

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (days === 1) return days + ' ' + $filter('translate')('Time.DayAgo');
        if (days > 0) return days + ' ' + $filter('translate')('Time.DaysAgo');

        // diff -= days * (1000 * 60 * 60 * 24);
        var hours = Math.floor(diff / (1000 * 60 * 60));
        if (hours === 1) return hours + ' ' + $filter('translate')('Time.HourAgo');
        if (hours > 0) return hours + ' ' + $filter('translate')('Time.HoursAgo');

        // diff -= hours * (1000 * 60 * 60);
        var mins = Math.floor(diff / (1000 * 60));
        if (mins === 1) return mins + ' ' + $filter('translate')('Time.MinuteAgo');
        if (mins > 0) return mins + ' ' + $filter('translate')('Time.MinutesAgo');

        return $filter('translate')('Time.JustNow');
        //diff -= mins * (1000 * 60);
        //var seconds = Math.floor(diff / (1000));
        //diff -= seconds * (1000);
    };
}])