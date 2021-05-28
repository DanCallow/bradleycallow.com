if (self.CavalryLogger) { CavalryLogger.start_js(["VYK50I5"]); }

__d("useOnBeforeUnloadBlue",["Run","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){var c=function(){var b=a();return b==null?void 0:b.warnMessage};h.useEffect(function(){return b("Run").onBeforeUnload(c,!0).remove})}}),null);
__d("useComposerSubmit",["fbt","CometRelay","VideoUploadSurface","cometUniqueID","cr:1526618","feedEditStoryLiveInsertUpdater","generateOptimisticResponse","getComposerLoggingPayload","ifRequireable","qex","react","requireDeferred","transformComposerViewStateToCreationData","transformComposerViewStateToMutationData","transformersArrayHelpers","useNotificationsTrackingString","useTriggerAccessibilityAlert"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=h||b("react"),j=b("requireDeferred")("ComposerStoryCreateMutation").__setRef("useComposerSubmit"),k=b("requireDeferred")("ComposerStoryEditMutation").__setRef("useComposerSubmit"),l=b("qex")._("1221850")===!0;function a(a){var c=a.actorID,d=a.creationSessionID,e=b("CometRelay").useRelayEnvironment(),f=b("useTriggerAccessibilityAlert")(),h=i.useCallback(function(c){b("cr:1526618")&&b("cr:1526618").onSubmitPostError(c.creationSessionID,b("VideoUploadSurface").VideoUploadSurfaceIDs.FEED);return function(b){a.onError(b,c)}},[a]),m=i.useCallback(function(c){var d;b("cr:1526618")&&b("cr:1526618").onSubmitPostCompleted(c.creationSessionID,b("VideoUploadSurface").VideoUploadSurfaceIDs.FEED);d=(d=c.audience)==null?void 0:(d=d.privacy)==null?void 0:d.base_state;d===null||d===void 0?f(g._("Your Post is successfully shared")):f(g._("Your Post is successfully shared with{audience}",[g._param("audience",d)]));return function(b){a.onCompleted(b,c)}},[a,f]),n=b("useNotificationsTrackingString")(),o=i.useCallback(function(i){var o=i.storyID;if(o!=null)b("transformComposerViewStateToMutationData")(a.unalteredBeginningViewState||null,i,b("transformersArrayHelpers").transformersArrayToMutationDataTransformers(a.transformers),{story_id:o},function(c){c.logging={composer_session_id:d},c.tracking=c.tracking?c.tracking.concat(n):[n],k.onReady(function(d){d=d.commit;d(e,c,{onCompleted:m(i),onError:h(i),updater:function(a){b("feedEditStoryLiveInsertUpdater")(o,a)},variables:{feedLocation:a.variables.feedLocation,renderLocation:a.variables.renderLocation}})})});else{var p=null,q=b("cometUniqueID")();if(a.composerType==="memories"){var r;r=((r=i.linkAttachment)==null?void 0:r.storyId)!=null?"THROWBACK_POST":"NOT_THROWBACK_POST";var s=i.goodwillCometMetadata;p={goodwill_comet_metadata:s,is_throwback_post:r}}var t=null;s=a.optimisticTransformers;var u=null;b("ifRequireable")("ComposerMediaFileUploader",function(a){u=a.getInstance(c),b("cr:1526618")&&b("cr:1526618").onSubmitPost(i.creationSessionID,b("VideoUploadSurface").VideoUploadSurfaceIDs.FEED)});var v=function(b){var c=new Error();b.error!=null&&(c.description=g._("Something went wrong. Please try again. You may want to check your connection and file sizes.").toString());a&&a.onError(c,i);t&&t.dispose()},w={payload:b("getComposerLoggingPayload").getFeedComposerLoggingPayload(i)};l&&s&&b("transformComposerViewStateToCreationData")(i,b("transformersArrayHelpers").transformersArrayToCreationDataTransformers(s),babelHelpers["extends"]({composer_entry_point:a.composerEntryPoint,composer_source_surface:a.composerSourceSurface,composer_type:a.composerType,idempotence_token:a.creationSessionID+"_"+a.requestType,source:"WWW"},p),function(f){f.logging={composer_session_id:d},f.tracking=f.tracking?f.tracking.concat(n):[n],j.onReady(function(g){g=g.commitOptimistic;u&&u.errorObserver.subscribe(v);t=g(e,f,{optimisticResponse:b("generateOptimisticResponse")(c,f,i,d),optimisticUpdater:function(b){return a.optimisticUpdater&&a.optimisticUpdater(b,q)},variables:a.variables},w)})});b("transformComposerViewStateToCreationData")(i,b("transformersArrayHelpers").transformersArrayToCreationDataTransformers(a.transformers),babelHelpers["extends"]({composer_entry_point:a.composerEntryPoint,composer_source_surface:a.composerSourceSurface,composer_type:a.composerType,idempotence_token:a.creationSessionID+"_"+a.requestType,source:"WWW"},p),function(k){a.mutationDataValidator&&a.mutationDataValidator(k),k.logging={composer_session_id:d},k.tracking=k.tracking?k.tracking.concat(n):[n],j.onReady(function(j){j=j.commit;l?j(e,k,{onCompleted:function(c){t&&t.dispose();a&&a.onCompleted(c,i);u&&u.errorObserver.unsubscribe(v);b("cr:1526618")&&b("cr:1526618").onSubmitPostCompleted(i.creationSessionID,b("VideoUploadSurface").VideoUploadSurfaceIDs.FEED);c=(c=i.audience)==null?void 0:(c=c.privacy)==null?void 0:c.base_state;c===null||c===void 0?f(g._("Your Post is successfully shared")):f(g._("Your Post is successfully shared with{audience}",[g._param("audience",c)]))},onError:function(c){a&&a.onError(c,i),t&&t.dispose(),u&&u.errorObserver.unsubscribe(v),b("cr:1526618")&&b("cr:1526618").onSubmitPostError(i.creationSessionID,b("VideoUploadSurface").VideoUploadSurfaceIDs.FEED)},updater:function(b){a.updater(b,q)},variables:a.variables},w):j(e,k,{onCompleted:m(i),onError:h(i),optimisticResponse:b("generateOptimisticResponse")(c,k,i,d),optimisticUpdater:a.optimisticUpdater,updater:a.updater,variables:a.variables},w)})})}},[a,e,m,h,d,c,f]);return o}}),null);
__d("VideoStateDirectory",["EventEmitter","VideoPlayerExperiments"],(function(a,b,c,d,e,f){a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$VideoStateDirectory1=new Map();return b}var d=c.prototype;d.setPlaybackState=function(a,c,d){var e=this.$VideoStateDirectory1.get(a)||{};e.currentTimePosition=c;e.playbackDuration=d;e.watched=e.currentTimePosition/e.playbackDuration>=b("VideoPlayerExperiments").watchedPercentage/100||!!e.watched;this.$VideoStateDirectory1.set(a,e);this.emit(a,e)};d.setSaveState=function(a,b){var c=this.$VideoStateDirectory1.get(a)||{};c.saved=b;this.emit(a,c)};d.setSubscriptionState=function(a,b){var c=this.$VideoStateDirectory1.get(a)||{};c.subscribed=b;this.emit(a,c)};d.getState=function(a){return this.$VideoStateDirectory1.get(a)};return c}(b("EventEmitter"));c=new a();e.exports=c}),null);
__d("VideoUpdateStateDirectory",["VideoStateDirectory"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){var a=this;this.$2=function(){var c=a.$1,d=c.getVideoID(),e=c.getCurrentTimePosition();c=c.getPlaybackDuration();b("VideoStateDirectory").setPlaybackState(d,e,c)}}var c=a.prototype;c.enable=function(a){this.$1=a,a.addListener("finishPlayback",this.$2),a.addListener("pausePlayback",this.$2)};c.disable=function(){};return a}();e.exports=a}),null);
__d("VideoHomeClickLogger",["VideoHomeEvents","VideoHomeTypedLogger"],(function(a,b,c,d,e,f){"use strict";f.logClick=g;f.init=a;function g(a){var c=a.target,d=a.id,e=a.clickPoint,f=a.playerOrigin;f=f===void 0?"video_home":f;a=a.eventTargetInfo;a=a===void 0?null:a;new(b("VideoHomeTypedLogger"))().setEvent(b("VideoHomeEvents").CLICK).setEventTarget(c).setEventTargetID(d).setClickPoint(e).setPlayerOrigin(f).setEventTargetInfo(a).log()}function a(a,b){a.addEventListener("click",function(){g(b)})}}),null);