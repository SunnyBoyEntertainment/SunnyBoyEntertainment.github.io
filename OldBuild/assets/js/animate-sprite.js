// JavaScript source code
   <script type="text/javascript">
        var animation = { progress: 0 };

        var tween = new TWEEN.Tween(animation)
            .to({ progress: 1 }, 1000)
            .onUpdate(function(){
                document.querySelector('a-image').setAttribute('sprite-sheet', 'progress', animation.progress);
            });


        tween.onComplete(function() { animation.progress = 0; });
        tween.chain(tween);
        tween.start();
    </script>