$(function () {
    //����Ӧ��
    var _wrap = $('ul.mulitline'); //�����������
    var _interval = 3000; //���������϶ʱ��
    var _moving; //��Ҫ����Ķ���
    _wrap.hover(function () {
        clearInterval(_moving); //������ڹ���������ʱ,ֹͣ����
    }, function () {
        _moving = setInterval(function () {
            var _field = _wrap.find('li:first'); //�˱������ɷ����ں�����ʼ����li:firstȡֵ�Ǳ仯��
            var _h = _field.height(); //ȡ��ÿ�ι����߶�
            _field.animate({ marginTop: -_h + 'px' }, 600, function () {//ͨ��ȡ��marginֵ�����ص�һ��
                _field.css('marginTop', 0).appendTo(_wrap); //���غ󣬽����е�marginֵ���㣬�����뵽���ʵ���޷����
            })
        }, _interval)//�������ʱ��ȡ����_interval
    }).trigger('mouseleave'); //��������ʱ��ģ��ִ��mouseleave�����Զ�����
});