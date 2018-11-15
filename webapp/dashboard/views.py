from datetime import timedelta
from datetime import date
import account.models
from django.shortcuts import render
from django.template import RequestContext



def dash(request):
    if request.user.is_authenticated():
        # main landing page
        # status = StatusReport.objects.all().order_by('-when')[:20]
        #
        # announce_date = date.today() - timedelta(days=30)
        # announce = (Announcement.objects.
        #             filter(when__gt=announce_date)
        #             .order_by('-when'))
        #usr = account.models.Account.objects.get(user_id=uid)
        #usr = User.get_by_id(uid)
        # return render('main/user.html',
        #               {'user': usr,
        #                'reports': status,
        #                'announce': announce})
        return render(request, 'dashboard/dashboard.html')
