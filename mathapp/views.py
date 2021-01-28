from django.shortcuts import render

# Create your views here.

def mathcircle(request):
    context= {}
    return render(request, 'mathapp/mathcircle.html',context)


def mathvolume(request):
    context= {}
    return render(request, 'mathapp/mathvolume.html',context)    
    